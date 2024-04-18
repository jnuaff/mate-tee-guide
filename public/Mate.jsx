import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mate.gltf");

  useFrame(() => {
    group.current.rotation.y += 0.03; 
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh className="mate-3d" geometry={nodes.defaultMaterial.geometry} material={materials.MateFull} scale={1.5} />
          <mesh className="mate-3d" geometry={nodes.defaultMaterial_1.geometry} material={materials.MateFull1} scale={1.5} />
          <mesh className="mate-3d" geometry={nodes.defaultMaterial_2.geometry} material={materials.MateFull2} scale={1.5} />
          <mesh className="mate-3d" geometry={nodes.defaultMaterial_3.geometry} material={materials.MateFull3} scale={1.5} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mate.gltf");
