import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../Home/Home.css';
import FadeInSection from '../../../utils/FadeIn';
import { Row, Col } from 'antd';
import { jobMarkets, rentalCosts, bestWeather } from './PictureLinks';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function InfoCard() {
  const classes = useStyles();

  return (
    <div className="cardsContainer">
      <FadeInSection>
        <Row gutter={16}>
          <Col style={{ marginBottom: '40px' }} className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Best Schools"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuek83NbzTG-vdS3_kRb93HPs2kDfS9AtgKg&usqp=CAU"
                  title="Best Schools"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Schools
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Discover the best schools in every city
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>

          <Col className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Safest Cities"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fBhrVSzrDrMcrUCJUzcUIv4XCRbIiEJVBQ&usqp=CAU"
                  title="Safest Cities"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Safest Cities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Ensure a peaceful and quiet environment
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>

          <Col className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Dangerous Cities"
                  height="140"
                  image="https://static.dw.com/image/16962055_401.jpg"
                  title="Dangerous Cities"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Most Dangerous Cities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Too much crime? Then it's not worth your time
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>

          <Col className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Job Markets"
                  height="140"
                  image={jobMarkets}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Top Job Markets
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Check out our latest job reports
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>

          <Col className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Rental Costs"
                  height="140"
                  image={rentalCosts}
                  title="Rental Costs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Average Rental Costs
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    From L.A highs to Texas lows
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>

          <Col className="card" span={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Best Weather"
                  height="140"
                  image={bestWeather}
                  title="Best Weather"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Weather
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Will you need sun screen or a snow shovel?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Col>
        </Row>
      </FadeInSection>
    </div>
  );
}
