'use client'
import useAuth from "@/Hooks/useAuth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const GetLeadLists = () => {
    const { user } = useAuth();
    const uid = user?.uid;
    const axiosPublic = useAxiosPublic();
    const [leadLists, setLeadLists] = useState([]);
    useEffect(() => {
        axiosPublic.get(`/leadList/${uid}`)
            .then(res => {
                setLeadLists(res.data);
            })
            .catch(err => console.log(err.message));
    }, [axiosPublic, uid])
    return leadLists;
};

export default GetLeadLists;