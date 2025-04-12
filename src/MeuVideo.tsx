
import { Audio, Img, staticFile, useCurrentFrame, interpolate } from 'remotion';

export const MeuVideo: React.FC<{
  texto: string;
  imagem: string;
  audio?: string;
}> = ({ texto, imagem, audio }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <div style={{ flex: 1, backgroundColor: 'black' }}>
      <Img src={imagem} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: 80,
          opacity,
        }}
      >
        {texto}
      </h1>
      {audio && <Audio src={audio} />}
    </div>
  );
};
