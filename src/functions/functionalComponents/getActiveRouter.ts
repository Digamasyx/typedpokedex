import { useLocation } from "react-router-dom";

export function useGetActiveRoute() {
    const location = useLocation()
    return {
        hash: location.hash,
        key: location.key,
        pathname: location.pathname,
        search: location.search,
        state: location.state
    }
}