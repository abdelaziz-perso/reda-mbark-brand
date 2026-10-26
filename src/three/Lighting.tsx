export function Lighting({ lite }: { lite: boolean }) {
  return (
    <>
      <ambientLight intensity={lite ? 0.7 : 0.45} />
      <directionalLight position={[3.2, 4.2, 2.4]} intensity={lite ? 1.15 : 1.45} color="#f2f2f2" />
      {lite ? null : (
        <spotLight
          position={[-2.6, 2.4, 2.2]}
          angle={0.7}
          penumbra={0.8}
          intensity={8}
          color="#d5d5d5"
          distance={12}
        />
      )}
    </>
  );
}
