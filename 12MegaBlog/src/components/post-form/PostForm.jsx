import React,{useCallback} from "react";
import {useForm} from 'react-hook-form'
import {Button,Input,Select} from '../index'
import appwriteService from "../../appwrite/config";
<app></app>
import {useNavigate} from 'react-redux';
import { Condition } from "appwrite";

function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,
    constrol,getValues} = useForm({
        defaultValues:{
            title: post?.title || '',
            slug:post?.content || '',
            content:post?.content || '',
            status:post?.status||'active',

        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    
    const submit = async (data) => {
        if (post) {
            const filedata = data.image[0] ? appwriteService.
            uploadFile(data.image[0]) :null

            if(file){
                appwriteService.deleteFile(post.
                featuredImage)
            }
            const dbPost = await appwriteService.updatePost
            (post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if (dbpost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else{
            const file = await appwriteService.uploadFile
            (data.image[0]);

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createpost({
                    ...data,
                    userId:userData.$id,
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
            
            }
    

    
    const slugTransfom = useCallback ((value) => {
        if (value && typeof value === 'string') 
           return value
              .trim()
              .toLowerCase()
              .replace(/^[a-zA-Z\d\s]+/g,'-')
              .replace(/\s/g,'-')

           return ''
        
    },[])
    React.useEffect(() => {
        const Subcription = watch((value,{name}) => {
            if (name ==='title') {
                setValue('slug',slugTransfom(value.title,
                    {shouldValidate:true}))
            }

        })
        

    },[watch,slugTransfom,setValue])
    return (
        <div>PostForm</div>
    )
}

export default PostForm