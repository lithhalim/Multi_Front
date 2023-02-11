import React from "react";
import * as Yup from "yup";
import {MdSubject} from "react-icons/md";
import {IoIosNotifications} from "react-icons/io";
import {HiTemplate} from "react-icons/hi"

export class Stepper_Datause{
    static initialValues={street:"",country:"",hood:"",firstName:"",secandName:"",LastName:"",collageName:"",collageAdress:"",collageDegree:"" }
    static DataUse=[
        [ {name:"street",placeholder:"superAdminCountry.Notification Name",type:"text",icons:<IoIosNotifications/>,method:"input"},
        {name:"country",placeholder:"superAdminCountry.subject",type:"text",icons:<MdSubject/>,method:"input"},
        {name:"hood",placeholder:"superAdminCountry.template",type:"text",icons:<HiTemplate/>,method:"input"}],
        [ {name:"firstName",placeholder:"superAdminCountry.Notification Name",type:"text",icons:<IoIosNotifications/>,method:"input"},
        {name:"secandName",placeholder:"superAdminCountry.subject",type:"text",icons:<MdSubject/>,method:"input"},
        {name:"LastName",placeholder:"superAdminCountry.template",type:"text",icons:<HiTemplate/>,method:"input"}],
        [ {name:"collageName",placeholder:"superAdminCountry.Notification Name",type:"text",icons:<IoIosNotifications/>,method:"input"},
        {name:"collageAdress",placeholder:"superAdminCountry.subject",type:"text",icons:<MdSubject/>,method:"input"},
        {name:"collageDegree",placeholder:"superAdminCountry.template",type:"text",icons:<HiTemplate/>,method:"input"}]
       ]
      
    static AdressSchema = Yup.object().shape({
        street: Yup.string().required("Name is required"),
        country: Yup.string().required("Name is required"),
        hood: Yup.string().required("Name is required")
      });
    static NameSchema = Yup.object().shape({
        firstName: Yup.string().required("Address is required"),
        secandName: Yup.string().required("Address is required"),
        LastName: Yup.string().required("Address is required"),
      });
    static collageSchema = Yup.object().shape({
        collageName: Yup.string().required("Address is required"),
        collageAdress: Yup.string().required("Address is required"),
        collageDegree: Yup.string().required("Address is required"),
      });
}