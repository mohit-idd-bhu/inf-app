All the API routes are created under `pages/api`.

Data stored as **json** format in `data/data.json`
Helper Functions to read and write the data stored in `helpers` folder

1. **user-registration**: Creates user in the `data.json` file with unique key as email.
2. **user-login**: Checks if a valid email-password combination exists and returns jwt-token for the created user.
3. **user-verfication**: Checks if the given token is valid and return corresponding user info for the decrypted email id.

Other Functionalities that could be added are:

1. Hosting Data on a database rather than in a json file
2. Increasing Data Validation Logic.
