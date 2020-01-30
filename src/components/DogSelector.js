import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { getDogTypes, getDogImages } from "../actions/dogActions";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ImageSearch from "@material-ui/icons/ImageSearch";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = state => ({
  dogTypes: state.dogState.dogTypes,
  dataReady: state.dogState.dataReady
});

const mapDispatchToProps = dispatch => ({
  getTypes: () => dispatch(getDogTypes()),
  getImages: credentials => dispatch(getDogImages(credentials))
});

class DogSelector extends React.Component {
  state = {
    data: {
      selectorValue: ""
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
          {this.capitalizeFirstLetter(label)}
        </MenuItem>
      );
    });

  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ data: { selectorValue: value } });
  };

  handleGetImages = event => {
    event.preventDefault();
    const { selectorValue } = this.state.data;
    this.props.getImages({ selectorValue });
  };

  capitalizeFirstLetter = str =>
    str.substring(0, 1).toUpperCase() + str.substring(1);

  getImages = () => {};

  render = () => {
    const { dogTypes, dataReady } = this.props;
    const { selectorValue } = this.state.data;

    return (
      <div>
        <TextField
          id={"combo-pets"}
          select
          label={
            "Seleccione una raza y pulse en el botón de abajo para obtener imágenes"
          }
          fullWidth
          onChange={this.handleChange}
          value={selectorValue}
          disabled={!dataReady}
        >
          {this.buildOptions(dogTypes)}
        </TextField>
        {!dataReady && <CircularProgress size={60} />}
        <CardActions>
          <IconButton
            id={"communicationFormSave"}
            onClick={this.handleGetImages}
          >
            <ImageSearch />
          </IconButton>
        </CardActions>
        {this.getImages()}
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSelector);
