const API_URL = "http://localhost:3000/requerimentos";

export async function listarRequerimentos(forceLogout) {
  const token = localStorage.getItem('@AlunoOnline:token');

  if (!token) {
    if (forceLogout) forceLogout();
    throw new Error("401");
  }

  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (response.status === 401) {
    if (forceLogout) forceLogout();
    throw new Error("401");
  }

  if (!response.ok) {
    throw new Error("Erro ao buscar requerimentos");
  }

  return await response.json();
}

export async function cadastrarRequerimento(requerimento, forceLogout) {
  const token = localStorage.getItem('@AlunoOnline:token');

  if (!token) {
    if (forceLogout) forceLogout();
    throw new Error("401");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(requerimento),
  });

  if (response.status === 401) {
    if (forceLogout) forceLogout();
    throw new Error("401");
  }

  if (!response.ok) {
    throw new Error("Erro ao cadastrar requerimento");
  }

  return await response.json();
}