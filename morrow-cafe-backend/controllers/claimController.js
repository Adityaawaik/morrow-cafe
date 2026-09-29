const generateClaimCode = () => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return `MORROW-${code}`;
};

exports.claimOffer = (req, res) => {
  const { name, phone } = req.body;

  // Validate name
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please enter your name.",
    });
  }

  // Validate phone existence/type
  if (!phone || typeof phone !== "string") {
    return res.status(400).json({
      success: false,
      message: "Please enter your phone number.",
    });
  }

  const cleanName = name.trim();
  const cleanPhone = phone.trim();

  // Validate phone format
  if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid 10-digit mobile number.",
    });
  }

  // Generate claim code
  const claimCode = generateClaimCode();

  return res.status(200).json({
    success: true,
    claimCode,
    message: "Your offer has been claimed.",
  });
};
