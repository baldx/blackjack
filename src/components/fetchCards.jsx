import { useEffect } from "react";
import { useState } from "react";

function FetchData() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52');
        
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                else if (response.status >= 400) throw new Error("API exceeded time response");
        
                const data = await response.json();                
                if (mounted) setAllData(data);

            } catch (err) {
                setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchData();

        return () => {
            mounted = false;
        };
        
    }, []); 

    useEffect(() => {
        if (allData) {
            console.log(allData);
        }
    }, [allData]);

    //use useContext to save data
} 


export default FetchData;