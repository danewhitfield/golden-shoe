import React, { Suspense } from 'react';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shoe from '../models/Shoes';
// import Picker from '../models/Picker';
import { proxy } from 'valtio';

const state = proxy({
	current: null,
	items: {
		laces: '#ffffff',
		mesh: '#ffffff',
		caps: '#ffffff',
		inner: '#ffffff',
		sole: '#ffffff',
		stripes: '#ffffff',
		band: '#ffffff',
		patch: '#ffffff',
	},
});

const DisplayShoe = () => {
	return (
		<div style={{ width: '100%', height: '600px' }}>
			{/* <Picker state={state} /> */}

			<Canvas>
				<OrbitControls enablePan={false} enableZoom={false} />
				<ambientLight />
				<spotLight intensity={0.3} position={[5, 20, 20]} />
				<spotLight distance={5} angle={0.15} attenuation={5} anglePower={5} />
				<Suspense fallback={null}>
					<Shoe state={state} />
					<Environment files={'hdr.hdr'} />
					<ContactShadows
						rotation-x={Math.PI / 2}
						position={[0, -0.9, 0]}
						opacity={0.6}
						width={3}
						height={3}
						blur={2}
						far={10}
					/>
				</Suspense>
			</Canvas>
		</div>
	);
};

export default DisplayShoe;
