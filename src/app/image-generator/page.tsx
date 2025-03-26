'use client';

import { GoogleGenAI } from '@google/genai';
import Image from 'next/image';
import { useState } from 'react';

import '@/styles/app/image-generator/page.scss';
import Button from '@/components/common/Button';

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

export default function ImageGenerator() {
    const [imgUrl, setImgUrl] = useState<string | null>(null);
    const [value, setValue] = useState<string>('');
    const [jsonResponse, setJsonResponse] = useState<string | null>(null); // Add state for JSON response
    const [isGeneratingJSON, setIsGeneratingJSON] = useState<boolean>(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState<boolean>(false);

    const handleCreatePersona = async () => {
        try {
            setIsGeneratingJSON(true);
            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: `Create a persona model in JSON format for this description: '${value}' the response must be a JSON object in this format: {name: string, gender: string, traits: string[], hobbies: string[], appearance: {hair: string[], facial: string[], ...}}`,
            });
            const json = response.text || '';
            setJsonResponse(json.replace(/```json|\n```/g, '').trim()); // Set JSON response
        } catch (error) {
            console.log(error);
        } finally {
            setIsGeneratingJSON(false);
        }
    };

    const handleCreateImage = async () => {
        try {
            setIsGeneratingImage(true);
            const res = await ai.models.generateContent({
                model: 'gemini-2.0-flash-exp-image-generation',
                config: {
                    responseModalities: ['Text', 'Image'],
                },
                contents: `Generate an image of a real person based on this JSON format: ${jsonResponse}`,
            });
            if (!res.candidates) return;
            res.candidates[0].content?.parts?.forEach((part) => {
                const base64 = part.inlineData?.data;
                setImgUrl(`data:image/png;base64,${base64}`);
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsGeneratingImage(false);
        }
    };

    return (
        <div className="main">
            <h1>Welcome to the Models Generator</h1>
            <div className="input-container">
                <input
                    type="text"
                    id="model_desc"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Describe your model. Ex: “An adventurous photographer who loves traveling to remote places”)"
                />
                <Button
                    type="dark"
                    label="Create JSON"
                    onClick={handleCreatePersona}
                    width={160}
                    isLoading={isGeneratingJSON}
                />
            </div>
            {jsonResponse && (
                <div className="json-to-image-container">
                    <div className="json-box">
                        <pre>{jsonResponse}</pre>
                    </div>
                    <Button
                        type="dark"
                        label="Create Image"
                        isLoading={isGeneratingImage}
                        onClick={handleCreateImage}
                        width={160}
                    />
                    {imgUrl && (
                        <Image
                            src={imgUrl}
                            height={400}
                            className="image-generated"
                            width={400}
                            alt="image generated"
                        />
                    )}
                </div>
            )}
        </div>
    );
}
