import { ref } from "@vue/reactivity"

export function useStars(num, callback) {
    const startNum = ref(num)
    const setStarNum = (num) => {
        startNum.value = num
        callback()
    }
    return [startNum, setStarNum]
}