import {useState} from "react";

export const useEditor = () => {
    const [startPosition, setStartPosition] = useState()
    const [endPosition, setEndPosition] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState("abcdefghijklmno")

    const addTags = (beforeTag, afterTag) => {
        let tmpText = text.slice()
        let substr = tmpText.slice(startPosition, endPosition)
        let arr = substr.split()
        arr.unshift(beforeTag)
        arr.push(afterTag)
        const str = arr.join("")
        let tmpTextArr = tmpText.split()
        const strgfromarr = tmpTextArr.join("")
        const before = strgfromarr.slice(0, startPosition)
        const after = strgfromarr.slice(endPosition, strgfromarr.length - 1)
        const newArr = [before, str, after]
        setText(newArr.join(""))
    }
    return {addTags, isEdit, setIsEdit, setStartPosition, setEndPosition, text}
}