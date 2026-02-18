# Outreach Tracker — Dashboard Tab Formulas

After importing `outreach-tracker.csv` into Google Sheets, create a second tab called **"Dashboard"** and paste these formulas. They reference the first tab (rename it to "Tracker" or update the sheet name in the formulas).

---

## Overall Campaign Metrics

| Cell | Label | Formula |
|------|-------|---------|
| A2 / B2 | Total Targets | `=COUNTA(Tracker!A2:A) - COUNTBLANK(Tracker!A2:A)` |
| A3 / B3 | Total Contacted | `=COUNTIF(Tracker!N2:N,"<>Not Started")` |
| A4 / B4 | Total Responses | `=COUNTIF(Tracker!Q2:Q,"Yes")` |
| A5 / B5 | Response Rate | `=IF(B3>0, B4/B3, 0)` |
| A6 / B6 | Positive Responses | `=COUNTIF(Tracker!R2:R,"Positive")` |
| A7 / B7 | Positive Response Rate | `=IF(B4>0, B6/B4, 0)` |
| A8 / B8 | Meetings Booked | `=COUNTIF(Tracker!T2:T,"Yes")` |
| A9 / B9 | Meeting Booking Rate | `=IF(B3>0, B8/B3, 0)` |
| A10 / B10 | Meetings Completed | `=COUNTIF(Tracker!V2:V,"Yes")` |
| A11 / B11 | Meeting Show Rate | `=IF(B8>0, B10/B8, 0)` |
| A12 / B12 | Still Waiting (no reply) | `=COUNTIF(Tracker!N2:N,"Contacted") + COUNTIF(Tracker!N2:N,"No Response")` |
| A13 / B13 | Not Interested | `=COUNTIF(Tracker!R2:R,"Negative")` |

Format B5, B7, B9, B11 as percentages.

---

## Channel Breakdown

| Cell | Label | Formula |
|------|-------|---------|
| A16 / B16 | **IG DM — Sent** | `=COUNTIF(Tracker!M2:M,"IG DM")` |
| A17 / B17 | IG DM — Replies | `=COUNTIFS(Tracker!M2:M,"IG DM",Tracker!Q2:Q,"Yes")` |
| A18 / B18 | IG DM — Response Rate | `=IF(B16>0, B17/B16, 0)` |
| A19 / B19 | IG DM — Meetings Booked | `=COUNTIFS(Tracker!M2:M,"IG DM",Tracker!T2:T,"Yes")` |
| A21 / B21 | **LinkedIn — Sent** | `=COUNTIF(Tracker!M2:M,"LinkedIn")` |
| A22 / B22 | LinkedIn — Replies | `=COUNTIFS(Tracker!M2:M,"LinkedIn",Tracker!Q2:Q,"Yes")` |
| A23 / B23 | LinkedIn — Response Rate | `=IF(B21>0, B22/B21, 0)` |
| A24 / B24 | LinkedIn — Meetings Booked | `=COUNTIFS(Tracker!M2:M,"LinkedIn",Tracker!T2:T,"Yes")` |
| A26 / B26 | **Email — Sent** | `=COUNTIF(Tracker!M2:M,"Email")` |
| A27 / B27 | Email — Replies | `=COUNTIFS(Tracker!M2:M,"Email",Tracker!Q2:Q,"Yes")` |
| A28 / B28 | Email — Response Rate | `=IF(B26>0, B27/B26, 0)` |
| A29 / B29 | Email — Meetings Booked | `=COUNTIFS(Tracker!M2:M,"Email",Tracker!T2:T,"Yes")` |

---

## City Breakdown

| Cell | Label | Formula |
|------|-------|---------|
| A32 / B32 | **Toronto — Contacted** | `=COUNTIFS(Tracker!C2:C,"Toronto",Tracker!N2:N,"<>Not Started")` |
| A33 / B33 | Toronto — Replies | `=COUNTIFS(Tracker!C2:C,"Toronto",Tracker!Q2:Q,"Yes")` |
| A34 / B34 | Toronto — Meetings | `=COUNTIFS(Tracker!C2:C,"Toronto",Tracker!T2:T,"Yes")` |
| A36 / B36 | **Vancouver — Contacted** | `=COUNTIFS(Tracker!C2:C,"Vancouver",Tracker!N2:N,"<>Not Started")` |
| A37 / B37 | Vancouver — Replies | `=COUNTIFS(Tracker!C2:C,"Vancouver",Tracker!Q2:Q,"Yes")` |
| A38 / B38 | Vancouver — Meetings | `=COUNTIFS(Tracker!C2:C,"Vancouver",Tracker!T2:T,"Yes")` |
| A40 / B40 | **Montreal — Contacted** | `=COUNTIFS(Tracker!C2:C,"Montreal",Tracker!N2:N,"<>Not Started")` |
| A41 / B41 | Montreal — Replies | `=COUNTIFS(Tracker!C2:C,"Montreal",Tracker!Q2:Q,"Yes")` |
| A42 / B42 | Montreal — Meetings | `=COUNTIFS(Tracker!C2:C,"Montreal",Tracker!T2:T,"Yes")` |

---

## Qualification Score Distribution

| Cell | Label | Formula |
|------|-------|---------|
| A45 / B45 | Score 5 (Perfect fit) | `=COUNTIF(Tracker!K2:K,5)` |
| A46 / B46 | Score 4 (Strong fit) | `=COUNTIF(Tracker!K2:K,4)` |
| A47 / B47 | Score 3 (Decent fit) | `=COUNTIF(Tracker!K2:K,3)` |
| A48 / B48 | Score 2 (Weak fit) | `=COUNTIF(Tracker!K2:K,2)` |
| A49 / B49 | Score 1 (Not a fit) | `=COUNTIF(Tracker!K2:K,1)` |

---

## Notes

- All column references (M, N, Q, R, T, V, etc.) are based on the CSV column order. If you rearrange columns in Google Sheets, update the references.
- Format date columns as dates in Google Sheets after import (Format → Number → Date).
- Add conditional formatting to the Outreach Status column for quick visual scanning:
  - Green: Meeting Done
  - Blue: Meeting Booked
  - Yellow: Replied
  - Orange: Contacted / No Response
  - Gray: Not Started
  - Red: Not Interested
