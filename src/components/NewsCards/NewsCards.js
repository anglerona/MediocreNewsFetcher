import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: '#9700c4', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#f5386e', title: 'News by Categories', info: 'Business, Entertainment, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
  { color: '#ff1947', title: 'News by Terms', info: 'Crypto, Nintendo, YouTube, Covid...', text: 'What\'s up with Nintendo' },
  { color: '#FF763B', title: 'News by Sources', info: 'BBC News, TechCrunch, Reuters, Buzzfeed, ABC News...', text: 'Give me the news from Buzzfeed' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography><br/>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}<br/>
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;