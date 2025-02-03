import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
  ClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID
};

export const userPool = new CognitoUserPool(poolData);

export const signUp = (name, email, password, callback) => {
  const attributes = [
    new CognitoUserAttribute({ Name: "name", Value: name }),
    new CognitoUserAttribute({ Name: "email", Value: email }),
  ];

  userPool.signUp(email, password, attributes, null, (err, result) => {
    if (err) {
      // Handle specific Cognito errors
      const errorMessage = err.message || "Signup failed";
      if (err.code === "UsernameExistsException") {
        return callback({ ...err, message: "Email already exists" }, null);
      }
      return callback({ ...err, message: errorMessage }, null);
    }
    callback(null, result);
  });
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    // Validate inputs
    if (!email || !password) {
      reject(new Error("Email and password are required"));
      return;
    }

    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    // Ensure the user pool is properly configured
    if (!poolData.UserPoolId || !poolData.ClientId) {
      reject(new Error("Cognito configuration is missing"));
      return;
    }

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        try {
          const tokens = {
            accessToken: result.getAccessToken().getJwtToken(),
            idToken: result.getIdToken().getJwtToken(),
          };
          resolve(tokens);
        } catch {
          reject(new Error("Failed to process authentication tokens"));
        }
      },
      onFailure: (err) => {
        console.error("Authentication error:", err);
        let errorMessage = "Authentication failed";

        switch (err.code) {
          case "NotAuthorizedException":
            errorMessage = "Incorrect email or password";
            break;
          case "UserNotConfirmedException":
            errorMessage = "Please verify your email first";
            break;
          case "BadRequest":
            errorMessage = "Invalid request. Please check your credentials.";
            break;
          default:
            errorMessage = err.message || "An error occurred during login";
        }

        reject(new Error(errorMessage));
      },
    });
  });
};

export const confirmUser = (email, code, callback) => {
  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  cognitoUser.confirmRegistration(code, true, (err, result) => {
    if (err) {
      let errorMessage = "Verification failed";
      if (err.code === "ExpiredCodeException") {
        errorMessage = "Verification code has expired";
      } else if (err.code === "CodeMismatchException") {
        errorMessage = "Invalid verification code";
      }
      return callback({ ...err, message: errorMessage });
    }
    callback(null, result);
  });
};

export const logout = () => {
  const user = userPool.getCurrentUser();
  if (user) {
    user.signOut();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
  }
};

export const isAuthenticated = () => {
  const user = userPool.getCurrentUser();
  if (!user) return false;

  // Verify valid session
  return new Promise((resolve) => {
    user.getSession((err) => {
      if (err) {
        logout();
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
