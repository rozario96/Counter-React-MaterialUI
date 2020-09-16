import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        backgroundColor: "#f3a683",
        paddingBottom: 10,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        paddingLeft: 18,
        margin: theme.spacing(1),
    },
}));

const Counter = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Total Count:
                </Typography>
                <Typography variant="h2" component="h2">
                    {count}
                </Typography>
                <Typography variant="body2" component="p">
                    time(s)
                </Typography>
            </CardContent>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
                startIcon={<RemoveIcon />}
                onClick={() => (count < 1 ? setCount(0) : setCount(count - 1))}
            />
            <Button
                variant="contained"
                color="default"
                size="small"
                className={classes.button}
                startIcon={<RotateLeftIcon />}
                onClick={() => setCount(0)}
            />
            <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={() => setCount(count + 1)}
            />
        </Card>
    );
};

export default Counter;
