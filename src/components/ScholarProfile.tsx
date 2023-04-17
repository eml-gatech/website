import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, ButtonBase } from "@material-ui/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const PublicationCard = ({ title, authors, venue, year, link }) => {
  return (
    <div>
      <Card>
        <ButtonBase onClick={event => { window.location.href = `https://scholar.google.com/${link}`}}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography color="textSecondary">{authors}</Typography>
            <Typography variant="body2" component="p">
              {venue}
            </Typography>
            <Typography color="textSecondary">{year}</Typography>
          </CardContent>
        </ButtonBase>
      </Card>
      <br/>
    </div>
  );
};

const CitationsBarGraph = ({ data }) => {
  const graphData = Object.entries(data.citations_per_year).map(([year, citations]) => ({
    year,
    citations,
  }));

  return (
    <BarChart width={350} height={300} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="citations" fill="#b3a369" />
    </BarChart>
  );
};

const ScholarProfile = ({scholarId, showIndex=true, showTotatCitations=false}) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://baena.gatech.edu/scholar/${scholarId}`);
        const dj = await response.json();
        // console.log(dj);
        setData(dj);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <div style={{display: "flex", flexWrap: "wrap-reverse"}}>
      <div style={{width:"70%", flex: 2}}>
        <h4><a href={`https://scholar.google.com/citations?user=${scholarId}&hl=en`}>Go to Google Scholar Profile</a></h4>
        <h3>Publications</h3>
        {data.publications.map((publication: JSX.IntrinsicAttributes & { title: any; authors: any; venue: any; year: any; link: any }, index: React.Key) => (
          <PublicationCard key={index} {...publication} />
        ))}
      </div>
      { showTotatCitations && 
      <div style={{flex: 1, padding: "0 0 0 20px", border: "2px"}}>
        <h3>Citations</h3>
        <CitationsBarGraph data={data} />
        <h4>Total Citations: {data.total_citations}</h4> 
        { showIndex &&
          <div>
            <h4>h-index: {data.hIndex}</h4>
            <h4>i-10 index: {data.i10Index}</h4>
          </div>
        }
      </div>
      }
    </div>
  );
};

export default ScholarProfile;
