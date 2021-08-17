import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import StaysCard from '../components/StaysCard';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';

const Search = ({searchResults}) => {

    console.log(searchResults);
    const router=useRouter();
    const{location,startDate,endDate,noOfGuests}=router.query;
    const formatedStartDate = format(new Date(startDate),"dd MMM yy");
    const formatedendDate = format(new Date(endDate),"dd MMM yy");
    const datesrange = `${formatedStartDate}-${formatedendDate}`;

    return (
        <div>
            <Header placeholder={`${location}  | ${datesrange}  |${noOfGuests}` }/>
            <main className="mx-4 pt-8">
            <div>
                <section>
                <h3 className="text-xs">300+ stays for{noOfGuests} guests between {datesrange}</h3>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <p>Review covid 19 restrictions before you leave</p>
                <div className="hidden lg:flex space-x-4 my-4">
                    <Button title={"cancellation flexibility"}/>
                    <Button title={"Type of Place"}/>
                    <Button title={"Price"}/>
                    <Button title={"Instant Book"}/>
                    <Button title={"More filters"}/>

              
                </div>
                </section>
                
           {
           searchResults.map(({price,star,total,title,description,location,img})=>(
            <StaysCard 
            location={location}
            img={img}
            price={price}
            title={title}
            star={star}
            description={description}
            total={total}
            key={img}
            />
           ))
           
          }
            </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Search;


export async function getServerSideProps(){
    const searchResults = await fetch("https://jsonkeeper.com/b/5NPS")
    .then((res)=> res.json());
    return{
        props:{

        searchResults,
        },
    };
}