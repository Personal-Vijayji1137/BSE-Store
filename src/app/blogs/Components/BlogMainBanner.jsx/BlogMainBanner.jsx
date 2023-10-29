import Styles from "./BlogMainBanner.module.css"
import Image from "next/image"
import Link from "next/link"
export default function BlogMainBanner(){
    return(
        <>
        <div className={Styles.BlogMainBanner}>
            <div>
                <div>
                    <div><Link href="/">Coading</Link></div>
                    <div><Link href="/">Earning</Link></div>
                </div>
                <div>All the money in the world can&apos;t buy you back good health</div>
                <div>My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had three. Just fancy! THREE proposals in one day! Isn&apos;t it awful! I feel sorry, really and truly sorry, for two of the poor fellows.</div>
                <div>
                    <div><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2YXYhNURTHL2NyzfhIjY9EXSaUEB54MaKEJLdJuXkYTaRBEYlHTZjGszQlLxMvJg9SriZFyoup4YUnH09ifOYzD0Z+Wt2lTqdzzt73nOvOOexVq7u797/WXv+99ll3rZPLOXHixMk/K8A64AjQaolvAg6pNlnatOoebYkDDtlgB/AJuKmfcy1sBPtQtWyBn+fbo71mBDybXAa6dX0P6DTgG4GfwAJVWTcabDrFt667gUtJAm4ApgfoNeCYYspAFzAuBCs6m4rMUBXJ63ULszn6J3OyFzCg68k+XEMUgfFAL/CVcPETaccsfiIPDPiylwgwAfjow0iMPRJzEJGDwBNghZx0wO8DfiKGzOaDiBhsuoIy4sPILVgJPAX2Bzm5BeyJ2KRfTkHX94EOQ1BykqPAItUf8p3BZrf41rWceH8Edq/EHPSDpLwYYbgF+AYMAW+AmVFBebL4TPWKBX6W+h7SvTZFYIsSc9VEFLNMMiEbmoLyVK5dqpHZ8JHpAJYacKFEzgJLchkRIogsBDZaasFjJ/d/oqfytVXhJ4meDCMiD/AI8NxCezx2F4Hlum4BHlv6SKojYUSGTc9IVq7WsCMyBoLLSHVNZ94C12zrs64ZAaYBfcAH7ateAmeASR7MKp01pHX5pXNKMTVEqLTZj4Dr+u/fDGzQVkPK8RxgH/AdOA3M11ItvdU74EBaiJwCbvvnBG1RpNl8BXwB1gbYrlGCLWkgItnYFtEF9xkawLuSnVwKiLwAVsexVfurwOE0ELkBnEhQ5eQg1qeByHbgNTAlhm1JeyerNr8e5Vfu+bkYdovjXEv+IpEC8FbKbFwfqWlR5J7rG46SZcnemtrul8ps/xk4D0w14Ixz/5g2jfpm8Q7wXie5gv7TH6+F/7p3v8BmLc2jOtH1ZnqwwvSaM57PopsQ0yS4jKRM+F8yMghcyIgOhhHZqe9/s6SlOl0AJ06cOMnVVn4DetbJpb0YZAkAAAAASUVORK5CYII=" width={50} height={50} alt=""/>May 2, 2022</div>
                    <div><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAECklEQVR4nO2ayY9MURTGb6NpIeZpQ1gagiDEXowtppVpKUiEDnYS7MwbIrHwV5AmSAgh5jZETE2QNiyIZWu0/OSo78VNefXqTVX9iC956aq+957h3XPuGW459x//KIBhwHLgENAKPAU+A1/12OcnGrM5y4ChrggAmoD1wHngB8nRDZwD1gH9ekKB/sAO4H2ZUFeBvcAqYBIwwgQEGu3tAxO1a7uBS0CXt/4dsN1eTr2UWAK89AR4BGwx00pBawiwAbjj0XsBLKq1GZ1IYT7EpL8QuOctO5777gBjgLtplIiriPj0BrYBnVp6GxidlxITtN2Gt8DMXAhH85wKPBPPdpMhK8GRHsH7wLjcpK3Oe6gOD+STY7L4RGpzSmNa5QAGADc8M0vuM2kdO09FDMBwzyqOuxRHrOEbMN31MCj5THAALEwS7II4sdcVBECL5/zVTQzY6Tl3o/7XoGOxq96mFQDoI5kMLS6Ggwdpx7KQ8RneUVxXRQwW8b0wUDk3U/JmeA70ChnvpQwW/Z3q6ghKlhGcpGuiJl7QpM0RcywZfKh5X2RyDbUSvhzARvE+G1VPdOsZFuN8P1lv0/ICpdU334HBrhzACvG97WICWKmCqW6KGIDLIr3UlQM4rMH9Lnkudl1ru1WP9E5h+3OBXTHnGw/DwbBBK0ENzUmE0FornPZ5VeIVYGwM4ecAR4A33gZOjMEvsJ7TYYPP4xKKYDCvrGr8w7SAWfYmgVdl017LKqompsBkrXkaNvhJg0PSKiI6o4AzIUIeK6sskTLWiJid5OSjVEIbPoYN2klAEM0zKtOg+jsMpswB25kM9PuJVleUIn2zKuLR7PAU+JBXUUYVRQLTGp4HMy+l6NCzOEe6I6JMK7Oz1wtUcfbWSsli0UApEBtORQXE3a7goEpAtA6g4aIrOPidojRXSsa6VTxliiW1BKXkNkgaB1WaZA1lwwZXUACbJGNr1KS1mnTHFRCUAm2bZFxdLdBYGWlY4AoGoFmydVS9hvBSi7ak6XgtQan58ECybY2zoMlrMGxzBQG/X/Cz2JdCXreis94NhjBYk1D9AcN8lwS6nwjeQG75V8pGertkOZqGQJMax6iRPKAmkkbLMBC4KRlupr5n1Nuw21nDLfueu7TRge+aeL/IfOGj5kK7Z2bTcpM22ifaxdOy8vF5ER7tmVmnGsp9ciH+5xG73XNsM6dReTNp8g4A1FBelGPEtquMIE78cuya3r3r9jXYdtSL3ZjmVwzyg01e2hGYUrIjNuPutHjpDMpILb3eo77TZN029dVjn6eoKNqjuUGfIEg7tvbULyAsN1tjDWWVAEnxXZXp6h5RIAzWULZerJpvp3Xt8Mn7UY19fmzlqeYsrVhP/If7+/ETtW4Ghjq2psgAAAAASUVORK5CYII=" width={50} height={50} alt=""/>3 min read</div>
                </div>
            </div>
            <div>
                <Image src="https://i.postimg.cc/4dxzwGwW/maxresdefault.jpg" width={1000} height={1000} alt=""/>
            </div>
        </div>
        </>
    )
}