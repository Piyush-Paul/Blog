exports.verifyUserDetails = (req, res , next) => {
  const {email , username , password } = req.body;
  const hasNumber = /\d/; // Matches any digit (0-9)
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/; // Matches common special characters

    const containsNumber = hasNumber.test(password);
    const containsSpecialCharacter = hasSpecialCharacter.test(password);
    if (password.length < 8 && containsNumber && containsSpecialCharacter){
      next()
    }else {
      return res.status(400).json({message: "Password must be at least 8 characters long and contain a special character, number or both."}) ;
    }
}

