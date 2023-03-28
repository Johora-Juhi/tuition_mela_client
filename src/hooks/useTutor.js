import { useEffect, useState } from "react";

const useTutor = (email) => {
    const [isTutor, setIsTutor] = useState('');
    const [isTutorLoading, setIsTutorLoadnig] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/tutor/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsTutor(data.isTutor);
                    setIsTutorLoadnig(false);
                })
        }
    }, [email]);
    return [isTutor, isTutorLoading];
}

export default useTutor;