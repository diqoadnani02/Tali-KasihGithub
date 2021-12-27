import style from "./Payment.module.scss";
import TextField from "@mui/material/TextField";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Input from "@mui/material/Input";
import InputPayment from "../../Components/InputPayment/InputPayment";
import LinearProgress from "@mui/material/LinearProgress";
// import Card from "../../Components/Card/Card";
import React, { useState, useRef, useEffect } from "react";
import useClipboard from "react-hook-clipboard";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bankTransferStart } from "./../../Store/Actions/donationAction/donationAction";
import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { getDetailCampaignAction } from "./../../Store/Actions/Campaign/campaign";
// import { category } from "./../Discover/Discover";

const Payment = () => {
  const ariaLabel = { "aria-label": "description" };
  const [values, setValues] = React.useState({
    amount: "",
    name: "",
    message: "",
    method: "Bank Transfer",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.replace(/[^0-9]/g, ""),
    });
  };
  console.log(values);
  const format = (value) => {
    if (value.length === 2) {
      const setOne = value.slice(0, 2);
      return setOne;
    }
    if (value.length >= 2) {
      const setOne = value.slice(0, 2);
      const setTwo = value.slice(2, 4);
      return `${setOne}/${setTwo}`;
    }
  };
  const formatCardNumber = (value) => {
    const setOne = value.slice(0, 4);
    const setTwo = value.slice(4, 8);
    const setThree = value.slice(8, 12);
    const setFour = value.slice(12, 16);
    if (value.length === 4) {
      return setOne;
    }
    if (value.length >= 4 && value.length <= 8) {
      return `${setOne}-${setTwo}`;
    }
    if (value.length >= 8 && value.length <= 12) {
      return `${setOne}-${setTwo}-${setThree}`;
    }
    if (value.length >= 12 && value.length <= 16) {
      return `${setOne}-${setTwo}-${setThree}-${setFour}`;
    }
  };
  // eslint-disable-next-line no-unused-vars
  const [togglePayment, setTogglePayment] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const handleChangeButton = (event, newTogglePayment) => {
    if (setTogglePayment !== null) {
      setTogglePayment(newTogglePayment);
    }
  };

  const copyAccountNumber = useRef();
  const copyTotalAmount = useRef();
  // eslint-disable-next-line no-unused-vars
  const [clipboard, copyToClipboard] = useClipboard();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickCopied = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCopied = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // eslint-disable-next-line no-unused-vars
  const idPopover = open ? "simple-popover" : undefined;
  // eslint-disable-next-line no-unused-vars
  const [detailCard, setDetailCard] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [transferBank, setTransferBank] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [id, dispatch]);

  const validation = values.amount !== "" && values.name !== "";
  console.log(validation);

  const donation = useSelector((state) => state.campaignReducer.detailCampaign);
  console.log(donation);
  const dataDonate = useSelector((state) => state?.donate?.bankTransfer?.paymentDetail);
  console.log(dataDonate, "dataDonate");
  return (
    <div className={style.payment}>
      <div>
        <h1 className={style.title}>Donation</h1>
      </div>
      <div>
        <div className={style.borderline}></div>
      </div>
      <div className={style.Form}>
        <div>
          <div>
            <p className={style.text_field}>
              Amount<span className={style.span}>*</span>
            </p>
          </div>
          <div>
            <TextField
              value={values.amount}
              onChange={handleChange}
              name="amount"
              id="formatted-amount-input"
              InputProps={{
                inputComponent: InputPayment,
                style: { fontSize: "14px", fontFamily: "Nunito", padding: "10px 0" },
              }}
              sx={{ marginBottom: "24px" }}
              variant="standard"
              className={style.input_field2}
            />
          </div>

          <div>
            <div>
              <p className={style.text_field}>
                Name<span className={style.span}>*</span>
              </p>
            </div>
            <div>
              <Input inputProps={ariaLabel} className={style.input_field2} onChange={(e) => setValues({ ...values, name: e.target.value })} />
            </div>
            <div>
              <label className={style.checkbox}>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                Set as anonymous
              </label>
            </div>
          </div>
          <div>
            <div className={style.message}>
              <p className={style.text_field}>
                Message <span className={style.span_text}>(optional)</span>
              </p>
            </div>
            <textarea className={style.text_box} onChange={(e) => setValues({ ...values, message: e.target.value })} type="text" placeholder="Give them Support!"></textarea>
          </div>
        </div>
        <div className={style.choosed_card}>
          <div className={style.image_category}>
            <img src={donation?.detailCampaign?.image} className={style.set_image} alt="gambar" />
          </div>
          <div className={style.category}>
            <button className={style.button_category}>
              <p>{donation?.detailCampaign?.category?.category}</p>
            </button>
            <div>
              <p className={style.title1}>{donation?.detailCampaign?.title}</p>
              <p className={style.title2}>{donation?.detailCampaign?.user?.name}</p>
            </div>
            <div>
              <LinearProgress variant="determinate" sx={{ height: "8px" }} value={donation?.detailCampaign?.deviaton} className={style.progress} />
            </div>
            <div className={style.goals_card}>
              <div>
                <p className={style.raised}>Raised</p>
                <p className={style.money1}>{donation?.detailCampaign?.collected}</p>
              </div>
              <div>
                <p className={style.goal}>Goal</p>
                <p className={style.money2}>{donation?.detailCampaign?.goal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className={style.title}>Payment</h1>
        </div>
        <div>
          <div className={style.borderline}></div>
        </div>
      </div>
      <div>
        <div>
          <p className={style.text_field}>
            Select Payment<span className={style.span}>*</span>
          </p>
        </div>
        <div className={style.button_payment}>
          {/* <ToggleButton
            className={togglePayment === "Card" ? style.credit_card_active : style.credit_card}
            onClick={() => {
              setDetailCard(!detailCard);
              setTogglePayment("Card");
            }}
          >
            <CreditCardIcon sx={{ fontSize: 40 }} />
            <p className={style.text_button}>Credit/Debit Card</p>
          </ToggleButton> */}
          <ToggleButton
            className={style.bank_transfer}
            sx={{
              "&:focus": {
                backgroundColor: "#D7EBEE",
              },
            }}
          >
            <AccountBalanceIcon sx={{ fontSize: 40 }} />
            <p className={style.text_button}>Bank Transfer</p>
          </ToggleButton>
        </div>
        {detailCard && (
          <div className={style.form_card}>
            <TextField
              required
              id="filled-required"
              label="Card Number"
              placeholder="e.g. 1234 5678 9012 3456"
              variant="filled"
              value={formatCardNumber(values.cardnumber)}
              name="cardnumber"
              inputProps={{
                maxLength: 19,
              }}
              onChange={handleChange}
              sx={{ width: "502px", height: "42px", marginRight: "10px" }}
            />
            <TextField
              id="filled-basic"
              label="ExpiryDate*"
              variant="filled"
              onChange={handleChange}
              value={format(values.expirydate)}
              name="expirydate"
              inputProps={{
                maxLength: 5,
              }}
            />
            <TextField
              required
              id="filled-required"
              label="CVV"
              placeholder="123"
              onChange={handleChange}
              value={values.cvv}
              name="cvv"
              inputProps={{
                maxLength: 3,
              }}
              variant="filled"
              sx={{ width: "168px", height: "42px", marginLeft: "10px" }}
            />
          </div>
        )}
        {dataDonate?.status_code === "201" && (
          <>
            <div className={style.form_transfer}>
              <p className={style.title_transfer}>Transfer to</p>
              <div className={style.transfer_data}>
                <div className={style.account}>
                  <p className={style.account_title}>Account Number</p>
                  <p ref={copyAccountNumber} className={style.account_data}>
                    {dataDonate?.va_numbers?.[0].va_number}
                  </p>
                </div>
                <div className={style.button_copied}>
                  <button
                    className={style.button_styling}
                    onClick={(e) => {
                      copyToClipboard(copyAccountNumber.current.innerText);
                      handleClickCopied(e);
                    }}
                  >
                    COPY
                  </button>
                  <Popover
                    idPopover={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseCopied}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>Copied</Typography>
                  </Popover>
                </div>
              </div>
              <div>
                <div className={style.account}>
                  <p className={style.account_title}>Bank Name</p>
                  <p className={style.account_data}>{dataDonate?.va_numbers?.[0].bank}</p>
                </div>
              </div>
              <div className={style.account}>
                <p className={style.account_title}>Account Name</p>
                <p className={style.account_data}>Tali Kasih</p>
              </div>
              <div className={style.transfer_data}>
                <div className={style.account}>
                  <p className={style.account_title}>Total Amount</p>
                  <p ref={copyTotalAmount} className={style.account_data}>
                    Rp. {values.amount}
                  </p>
                </div>
                <div className={style.button_copied}>
                  <button
                    className={style.button_styling}
                    onClick={(e) => {
                      copyToClipboard(copyTotalAmount.current.innerText);
                      handleClickCopied(e);
                    }}
                  >
                    COPY
                  </button>
                  <Popover
                    idPopover={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseCopied}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>Copied</Typography>
                  </Popover>
                </div>
              </div>
            </div>
          </>
        )}
        <div className={style.button_approve}>
          <button className={style.approve} disabled={!validation} onClick={() => dispatch(bankTransferStart(id, values))}>
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
