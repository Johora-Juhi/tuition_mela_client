import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - tuitionMela`;
    }, [title])
}

export default useTitle;