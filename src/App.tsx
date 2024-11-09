import { useState } from "react";
import QRCode from "qrcode";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  const [link, setLink] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(link);
      setQRCode(response);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Generador de Código QR
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Ingrese un enlace"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <Button onClick={generateQRCode} className="w-full">
            Generar
          </Button>
          {qrCode && (
            <div className="mt-4 flex justify-center">
              <img
                src={qrCode}
                alt="QR Code"
                className="border-2 border-gray-300 rounded-md"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
