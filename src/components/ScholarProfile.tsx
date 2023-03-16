import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const PublicationCard = ({ title, authors, venue, year }) => {
  return (
    <div>
      <Card>
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

const ScholarProfile = ({data}) => {
  return (
    <div>
      <CitationsBarGraph data={data} />
      <br/>
      {data.publications.map((publication: JSX.IntrinsicAttributes & { title: any; authors: any; venue: any; year: any; }, index: React.Key) => (
        <PublicationCard key={index} {...publication} />
      ))}
    </div>
  );
};

export default ScholarProfile;
