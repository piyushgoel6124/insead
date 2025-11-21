async function loadStudent(){
  const params = new URLSearchParams(location.search);
  const uid = params.get("userid");

  return await fetch(`data/students/${uid}.json`).then(r=>r.json());
}