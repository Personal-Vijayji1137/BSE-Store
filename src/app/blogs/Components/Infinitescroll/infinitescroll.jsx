import Styles from "./infinitescroll.module.css"
export default function InfiniteScroll(){
    return(
        <>
        <div className={Styles.InfiniteScroll}>
            <ul>
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
                <div>five</div>
                <div>six</div>
                <div>seven</div>
                <div>eight</div>
                <div>nine</div>
                <div>ten</div>
            </ul>
        </div>
        </>
    )
}