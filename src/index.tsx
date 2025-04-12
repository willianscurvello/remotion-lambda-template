
import { Composition } from 'remotion';
import { MeuVideo } from './MeuVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MeuVideo"
        component={MeuVideo}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          texto: "Seu texto aqui",
          imagem: "https://placehold.co/1080x1920",
          audio: ""
        }}
      />
    </>
  );
};
