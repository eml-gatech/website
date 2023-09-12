const express = require('express');
const XMLHttpRequest = require('xhr2');
const cheerio = require('cheerio');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, "/build")));

// Add CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/scholar/:id', (req, res) => {
  const id = req.params.id;
  const url = `https://scholar.google.com/citations?user=${id}&hl=en&sortby=pubdate`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    const html = xhr.responseText;
    const $ = cheerio.load(html);
    const totalCitations = $('#gsc_rsb_st > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim();
    const hIndex = $('.gsc_rsb_std').eq(2).text();
    const i10Index = $('#gsc_rsb_st > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim();
    const years = $('.gsc_g_t').map((i, el) => $(el).text().trim()).get();
    const counts = $('.gsc_g_al').map((i, el) => $(el).text().trim()).get();
    const citationYears = years.reduce((acc, curr, i) => {
      acc[curr] = counts[i];
      return acc;
    }, {});

    // Extract publications
    const publications = [];
    $('.gsc_a_tr').each((i, el) => {
      const titleLink = $(el).find('.gsc_a_t > a');
      const title = titleLink.text().trim();
      const link = titleLink.attr('href');
      const authors = $(el).find('.gs_gray').text().trim();
      const venue = $(el).find('.gsc_a_v').text().trim();
      const year = $(el).find('.gsc_a_y').text().trim();
      publications.push({ title, link, authors, venue, year });
    });

    // Construct JSON response object
    const data = { total_citations: totalCitations, citations_per_year: citationYears, publications, hIndex, i10Index };
    res.json(data);
  };
  xhr.send();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
