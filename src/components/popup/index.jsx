import Link from "next/link"

export const PopUp =() => {
    return (
        <div className="absolute bg-white px-4 py-4 my-2 rounded-md ">
            {/* <Link href={"home"}>
                <p>Home</p>
            </Link>  */}
            <Link href={"about"}>
                <p>About</p>
            </Link> 
            <Link href={"signup"}>
                <p>Sign Up</p>
            </Link> 
            <Link href={"signin"}>
                <p>Sign In</p>
            </Link> 
        </div>
    )
}