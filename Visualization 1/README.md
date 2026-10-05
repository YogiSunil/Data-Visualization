# Income, Occupation, and Reordering

## Question

**How do income levels and occupations relate to whether a customer reorders?**

## Visualization

An alluvial diagram traces customers through three categorical stages:

1. Monthly income, grouped as No Income, Low Income, Mid Income, or High Income
2. Occupation, grouped as Student, Employed, or Other
3. Reorder outcome (`Output`: Yes or No)

Ribbon width is intended to represent the number of customers following a path.

## Answer

The dataset contains **388 customers**. **301 (77.6%)** reported a reorder (`Output = Yes`), and 87 reported No.

| Group | Reordered Yes | Reorder rate |
|---|---:|---:|
| No Income | 164 / 187 | 87.7% |
| Low Income | 51 / 70 | 72.9% |
| High Income | 44 / 62 | 71.0% |
| Mid Income | 42 / 69 | 60.9% |

| Occupation group | Reordered Yes | Reorder rate |
|---|---:|---:|
| Student | 184 / 207 | 88.9% |
| Employed | 110 / 172 | 64.0% |
| Other | 7 / 9 | 77.8% |

The largest single income-to-occupation-to-outcome path is **No Income → Student → Yes**, with **157 customers**. In these survey responses, students and customers reporting no income have higher reorder rates than the employed and income groups. The Other occupation group contains only 9 people, so its rate should be interpreted cautiously. These are associations in this dataset, not evidence that income or occupation causes reordering.

## Data and Interpretation

Source: `data/delivery.csv`. Income categories are simplified as follows: No Income stays No Income; Below Rs.10000 and 10001 to 25000 become Low Income; 25001 to 50000 becomes Mid Income; More than 50000 becomes High Income. Student remains Student; Employee and Self Employeed become Employed; House wife becomes Other.

**Implementation note:** the current HTML prototype uses manually specified node positions and heights. The counts above are calculated from the CSV, but the rendered node sizes are not yet proportional to those counts, so treat the current chart as a flow-layout draft rather than a quantitatively scaled alluvial diagram.
