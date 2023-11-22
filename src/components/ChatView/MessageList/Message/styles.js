export const SX = {
  outboundMainContainer: {
    borderRadius: "8px 8px 0 8px",
    background: "#f1f3f8",
    padding: "16px",
    whiteSpace: "pre-line",
    wordBreak: "break-word",
    maxWidth: "240px",
    wordWrap: "break-word",
    position: "relative",
    right: "0",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    mb: "16px",
    ":hover": {
      "& > div": {
        display: "block",
      },
    },
  },
  outboundDate: {
    display: "none",
    color: "#73849e",
    fontSize: "12px",
    lineHeight: "16px",
    position: "absolute",
    top: "50%",
    transform: "translateX(-100%) translateY(-50%)",
    left: "-16px",
  },
  outboundContentContainer: {
    display: "flex !important",
    alignItems: "flex-end",
    gap: "5px",
  },
  outboundText: {
    fontSize: "15px",
    fontWeight: "500",
  },

  inboundMainContainer: {
    borderRadius: "8px 8px 8px 0",
    border: "1px solid #d9e1ec",
    padding: "16px",
    whiteSpace: "pre-line",
    wordBreak: "break-word",
    maxWidth: "200px",
    wordWrap: "break-word",
    position: "relative",
    left: "0",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    mb: "16px",
    ml: "30px",
    ":hover": {
      "& > div": {
        display: "block",
      },
    },
  },
  inboundDate: {
    display: "none",
    color: "#73849e",
    fontSize: "12px",
    lineHeight: "16px",
    position: "absolute",
    top: "50%",
    transform: "translateX(100%) translateY(-50%)",
    right: "-16px",
    left: "auto",
  },
  inboundAvatar: {
    position: "absolute",
    left: "-35px",
    bottom: "0px",
    width: "30px",
    height: "30px",
  },
};
