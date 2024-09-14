import { memo, useRef } from "react";
import { Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { ExperienceData, CareerData } from "../../../constants/Experience.ts";
// import { CareerData } from "../../../constants/Experience.ts";
import PerformanceCanvas from "../utils/PerformanceCanvas.tsx";
import { useInView } from "framer-motion";

type ExperienceModelContainerProps = {
    experience: ExperienceData;
    career: CareerData;
};

const ExperienceModelContainer = memo(
    ({ experience }: ExperienceModelContainerProps) => {
        const wrapperRef = useRef(null!);
        const inView = useInView(wrapperRef, { amount: 0.5, once: true });

        return (
            <div ref={wrapperRef} className='h-full w-full hover:select-none'>
                <PerformanceCanvas
                    id={"canvas-" + experience.refName}
                    className='h-full w-full hover:select-none'>
                    <PerspectiveCamera
                        makeDefault
                        fov={90}
                        position={[0, 0.3, 5]}
                        zoom={4}
                    />
                    <Environment files='stars.hdr' path='./environment/'>
                        <Lightformer
                            intensity={0.05}
                            rotation-x={Math.PI}
                            position={[0, 5, -9]}
                            scale={[50, 50, 1]}
                        />
                    </Environment>
                </PerformanceCanvas>
            </div>
        );
    },
);

export default ExperienceModelContainer;
