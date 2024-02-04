import React from "react";
import { render } from "@testing-library/react";
import ItemsSkeletonComponent from "./ItemsSkeletonComponent";

describe("ItemsLoadingSkeleton", () => {
  it("renders a circular loading skeleton icon for each item", () => {
    const { getAllByTestId } = render(<ItemsSkeletonComponent />);
    const skeletonIcons = getAllByTestId("loading-skeleton-rectangular");
    expect(skeletonIcons).toHaveLength(10);
  });

  it("renders loading skeletons for primary and secondary text for each item", () => {
    const { getAllByTestId } = render(<ItemsSkeletonComponent />);
    const primarySkeletons = getAllByTestId("loading-skeleton-primary");
    const secondarySkeletons = getAllByTestId("loading-skeleton-secondary");
    expect(primarySkeletons).toHaveLength(10);
    expect(secondarySkeletons).toHaveLength(10);
  });
});
