import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UseApplyQueryParamsProps = {
  paramName: string;
  remove: Array<string>;
};

export const useApplyQueryParams = ({
  paramName,
  remove,
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
    if (remove?.length) {
      remove.forEach((key) => {
        params.delete(key);
      });
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { applyQueryParams, param };
};
