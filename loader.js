async function loadStudent(){
  const params = new URLSearchParams(location.search);
  const rollNumber = params.get("rollNumber");

  return await fetch(`data/students/${rollNumber}.json`).then(r=>r.json());
}