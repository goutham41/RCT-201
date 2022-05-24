import React, { useRef ,useState} from 'react'
import styles from './Opt.module.css'
type OtpInputType = {
  totalInputs:number;
  onChange :(otp : string) => void
}
const OptInput = ({totalInputs , onChange}:OtpInputType) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [otp,setOtp] = useState<string>("");
   const handlePaste = (e: any) => {
     console.log(e.clipboardData.getData("Text"), "the post");
   };
  return (
    <div onPaste={handlePaste}>
      {new Array(totalInputs).fill(1).map((_, index) => (
        <input
          onChange={(e) => {
            setOtp(otp + e.target.value);
          }}
          onKeyUp={(e) => {
            // check if backspace
            // input out of bound
            console.log(index);
            if (e.code === "Backspace") {
                if(index === 0){
                    return
                }
              inputRef.current[index - 1].focus();
              inputRef.current[index - 1].select();
            } else {
                if(index === totalInputs){
                    return
                }
              inputRef.current[index + 1].focus();
            }
            onChange(otp);
          }}
          ref={(element) => {
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          type="text"
          maxLength={1}
          className="otpInput"
          key={index}
        />
      ))}
    </div>
  );
}

export default OptInput