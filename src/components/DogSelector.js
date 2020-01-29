import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { getDogTypes } from "../actions/dogActions";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Save from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = state => ({
  dogTypes: state.dogState.dogTypes,
  dataReady: state.dogState.dataReady
});

const mapDispatchToProps = dispatch => ({
  getTypes: () => dispatch(getDogTypes())
});

class DogSelector extends React.Component {
  state = {
    data: {
      selectorValue: "0"
    }
  };

  componentDidMount = () => {
    console.log("pido datos");
    this.props.getTypes();
  };

  buildOptions = options =>
    options.map(option => {
      const { label, value } = option;

      return (
        <MenuItem key={value} value={value}>
          {`Raza: ${label}`}
        </MenuItem>
      );
    });

  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ data: { selectorValue: value } });
  };

  handleSave = event => {
    event.preventDefault();
    const { selectorValue } = this.state.data;
    //this.props.setType(selectorValue);
  };

  render = () => {
    const { dogTypes, dataReady } = this.props;
    const { selectorValue } = this.state.data;

    return (
      <div>
        <TextField
          id={"combo-pets"}
          select
          label={"Seleccione una raza en concreto"}
          fullWidth
          onChange={this.handleChange}
          value={selectorValue}
          disabled={!dataReady}
        >
          {this.buildOptions(dogTypes)}
        </TextField>
        {!dataReady && <CircularProgress size={60} />}
        <CardActions>
          <IconButton id={"communicationFormSave"} onClick={this.handleSave}>
            <Save />
          </IconButton>
        </CardActions>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSelector);
