'use client'
import useAuth from "@/Hooks/useAuth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const GetTemplateList = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [templateData, setTemplateData] = useState(null);
    useEffect(() => {
        axiosPublic.get(`/email-template/${user?.uid}`)
            .then(res => {
                setTemplateData(res.data);
            })
    }, [axiosPublic, user?.uid])
    return templateData;
};

export default GetTemplateList;