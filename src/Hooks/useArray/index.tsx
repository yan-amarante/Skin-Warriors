

function useArray<ObjectToTransform>(object: ObjectToTransform | null, stateUpdate: React.Dispatch<React.SetStateAction<ObjectToTransform[] | null>>) {

    if (object) {

        const array: ObjectToTransform[] = Object.values(object)

        stateUpdate(array)

    }

}


export default useArray