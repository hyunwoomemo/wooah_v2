const signup = (req, res) => {
  // 클라이언트로부터 전달된 회원가입 정보 가져오기
  console.log(req.body);

  // 회원가입 처리
  // ... (회원가입 로직 구현)

  // 회원가입 성공 응답
  res.status(200).json({ message: "회원가입이 완료되었습니다." });
};

module.exports = {
  signup,
};
