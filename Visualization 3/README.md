# AI Skill Requirements Across Tech Job Categories

## Question

**How does the percentage of job listings with AI skills vary across different technology job categories?**

## Visualization

A box plot compares the distribution of `pct` across AI, Product, Data, Engineering, Security and DevOps. Each observation is one snapshot date. The median labels show the typical percentage; boxes show the middle 50% of snapshots; whiskers show the non-outlier range; dots show outlier snapshots.

The CSV rows are filtered to `seniority = all` and `tier = any_ai`, so each category's overall AI-skill percentage is included once per snapshot. The chart uses all 65 available snapshots per category, from March 12 to October 4, 2026.

## Answer

AI listings have the highest typical share of listings with AI skills: the median is **55.8%**, well above the next category, Product, at **16.1%**. DevOps has the lowest median at **5.8%**.

| Category, low to high median | Median `pct` |
|---|---:|
| DevOps | 5.8% |
| Security | 7.2% |
| Engineering | 11.8% |
| Data | 12.0% |
| Product | 16.1% |
| AI | 55.8% |

AI also has a much wider central spread than the other categories (45.3% to 73.7% for the middle half of snapshots). Data has the most outlier snapshots (14); DevOps and Engineering have 8 each, Security has 2, and Product and AI have none.

## Interpretation Note

The plot describes variation across snapshot dates, not variation among individual job listings. The source data changes sharply around July 10, 2026, alongside a large increase in listing counts. Early high snapshots account for many of the Data, DevOps and Engineering outliers, so those dots should be interpreted in the context of that collection change.

`pct` is the dataset's percentage of listings with AI skills. The chart therefore describes listings marked with AI skills, rather than independently verifying that every listing explicitly requires them.
