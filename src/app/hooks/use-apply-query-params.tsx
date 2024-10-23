import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UseApplyQueryParamsProps = {
  paramName: string;
};

export const useApplyQueryParams = ({
  paramName,
}: UseApplyQueryParamsProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const param = searchParams.get(paramName)?.toString();

  const applyQueryParams = (searched: string) => {
    const params = new URLSearchParams(searchParams);
    if (searched) {
      params.set(paramName, searched);
    } else {
      params.delete(paramName);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return { applyQueryParams, param };
};
