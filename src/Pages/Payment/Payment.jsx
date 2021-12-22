import React from "react";
import style from "./Payment.module.scss";
import TextField from "@mui/material/TextField";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Input from "@mui/material/Input";
import InputPayment from "../../Components/InputPayment/InputPayment";
import Card from "../../Components/Card/Card";
import itemDonate from "./assets/itemDonate.png";
import { useState, useRef } from "react";
import {useClipboard} from "react-hook-clipboard";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bankTransferStart } from "./../../Store/Actions/donationAction/donationAction";
const Payment = () => {
  const ariaLabel = { "aria-label": "description" };
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
    numberformat: "",
    name: "",
    cardnumber: "",
    expirydate: "",
    cvv: "",
    accountnumber: "",
    totalamount: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value.replace(/[^0-9]/g, ""),
    });
  };
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
  const id = open ? "simple-popover" : undefined;
  const [detailCard, setDetailCard] = useState(false);
  const [transferBank, setTransferBank] = useState(false);

  const { campaignId } = useParams();

  const validation = values.numberformat !== "" && values.name !== "" && values.cardnumber !== "" && values.expirydate !== "" && values.cvv !== "";

  const dispatch = useDispatch();
  const donation = useSelector((state) => state.donationReducer);
  console.log(donation);
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
              value={values.numberformat}
              onChange={handleChange}
              name="numberformat"
              id="formatted-numberformat-input"
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
              <Input inputProps={ariaLabel} className={style.input_field2} />
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
            <textarea className={style.text_box} type="text" placeholder="Give them Support!"></textarea>
          </div>
        </div>
        <Card image={itemDonate} category="Medical" title="Aid for necessary items to help our country" author="Aksi Cepat Tanggap" data_funding={60} raised="IDR 30.000.000" goal="IDR 50.000.000" />
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
          <button
            className={style.credit_card}
            onClick={() => {
              setDetailCard(!detailCard);
              setTransferBank(false);
            }}
          >
            <CreditCardIcon sx={{ fontSize: 40 }} />
            <p className={style.text_button}>Credit/Debit Card</p>
          </button>
          <button
            className={style.bank_transfer}
            onClick={() => {
              setTransferBank(!transferBank);
              setDetailCard(false);
            }}
          >
            <AccountBalanceIcon sx={{ fontSize: 40 }} />
            <p className={style.text_button}>Bank Transfer</p>
          </button>
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
        {transferBank && (
          <>
            <div className={style.form_transfer}>
              <p className={style.title_transfer}>Transfer to</p>
              <div className={style.transfer_data}>
                <div className={style.account}>
                  <p className={style.account_title}>Account Number</p>
                  <p ref={copyAccountNumber} className={style.account_data}>
                    1234 5678 90
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
                    id={id}
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
              <div className={style.account}>
                <p className={style.account_title}>Account Name</p>
                <p className={style.account_data}>Tali Kasih</p>
              </div>
              <div className={style.transfer_data}>
                <div className={style.account}>
                  <p className={style.account_title}>Total Amount</p>
                  <p ref={copyTotalAmount} className={style.account_data}>
                    Rp. {values.numberformat}
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
                    id={id}
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
          <button className={style.approve} disabled={validation} onClick={() => dispatch(bankTransferStart(campaignId, values))}>
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
