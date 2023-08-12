import React from "react";
import CompD from "./CompC";

interface Iprops {
	Uname: string;
    Uemail : string
}

const CompC: React.FC<Iprops> = ({ Uname, Uemail }) => {
	return <div>

        <CompD  Uname = {Uname}  Uemail = {Uemail} />
    </div>;
};

export default CompC;