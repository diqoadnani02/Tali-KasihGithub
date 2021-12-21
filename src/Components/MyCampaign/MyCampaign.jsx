import React from "react";
import { Paper, Typography, Grid, Button, Box } from "@mui/material";
import Card from "../Card/Card";
// import data from '../Card/data'
import { getMycampaignStart } from "../../Store/Actions/mycampaignAction/mycampaignAction";
import { useDispatch, useSelector } from "react-redux";
import data from "../Card/data";
import { Link } from "react-router-dom";

const MyCampaign = (id, category) => {
  // const [list, setList] = React.useState([]);
  const [end, setEnd] = React.useState(2);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMycampaignStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { myCampaign } = useSelector((state) => state.campaign);
  // const sliced = list.slice(0, end)

  return (
    <Paper
      container
      sx={{
        mt: "72px",
        ml: "263px",
        mr: "205px",
        mb: "113px",
        p: 2,
        borderRadius: "4px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "nunito",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "33px",
        }}
      >
        My Campaign
      </Typography>
      <Link to={`/campaign/${category}/${id}`}>
        <Box
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "0 100px",
          }}
        >
          {myCampaign.map((item) => (
            <Card
              id={item.id}
              image={item.image}
              category={item.category.category}
              title={item.title}
              author={item.user.name}
              data_funding={item.collected}
              raised={item.deviation}
              goal={item.goal}
            />
          ))}
        </Box>
      </Link>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={5}>
          <Button
            onClick={() => setEnd(end + 2)}
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "3px",
              border: "1px solid #1D94A8",
            }}
          >
            <Typography
              sx={{
                fontFamily: "nunito",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "1px",
                color: "#1D94A8",
              }}
            >
              Load More
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MyCampaign;
