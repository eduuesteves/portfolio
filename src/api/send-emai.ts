import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  [key: string]: any; // Permite campos extras caso precise no futuro
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Garante estritamente que apenas requisições POST sejam aceitas
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message } = req.body as ContactRequestBody;

    const accessKey = process.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Server configuration error: Missing access key' 
      });
    }

    // Encaminha os dados de forma segura para a Web3Forms injetando a chave no servidor
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro na Serverless Function:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}